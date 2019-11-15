<template>
  <div>
    <div style="color:black;"></div>
    <canvas></canvas>
  </div>
</template>
<style>
input {
  border: none;
  background: transparent;
}

input:focus {
  outline: 2px solid orange;
  padding: 5px;
}
</style>
<script>
export default {
  name: "PDFPage",

  props: {
    page: {
      type: Object, // instance of PDFPageProxy returned from pdf.getPage
      required: true
    }
  },
  data() {
    return {
      viewport: {}
    };
  },
  mounted() {
    this.drawPage();
    this.$socketio.on("annotation", ann => {
      this.addAnnotation(ann);
    });
    this.$socketio.on("delete_annotation", ann => {
      this.deleteAnnotation(ann);
    });
    this.$socketio.emit("join_file", { filename: "asdf" });

    this.$el.children[0].onclick = e => {
      this.addAnnotation({
        x: e.layerX / this.viewport.width,
        y: e.layerY / this.viewport.height,
        data: ""
      }).focus();
    };
  },
  methods: {
    drawPage() {
      if (this.renderTask) return;

      const viewport = this.page.getViewport({ scale: 1 });
      this.viewport = viewport;
      const canvasContext = this.$el.children[1].getContext("2d");
      this.$el.children[1].height = viewport.height;
      this.$el.children[1].width = viewport.width;
      this.$el.children[1].style.zIndex = "5";

      this.$el.children[0].style.height = viewport.height + "px";
      this.$el.children[0].style.zIndex = "10";
      this.$el.children[0].style.width = viewport.width + "px";
      this.$el.children[0].style.top = "0px";
      this.$el.children[0].style.position = "absolute";
      const renderContext = { canvasContext, viewport };

      this.renderTask = this.page.render(renderContext);
      this.renderTask.then(() => this.$emit("rendered", this.page));
    },
    addAnnotation(ann) {
      var div = document.createElement("input");
      div.setAttribute("value", ann.data);
      console.log("Dat", ann.x, ann.y, ann.data);
      div.id = "ann-" + ann.x + "-" + ann.y;
      div.style.left = ann.x * this.viewport.width + "px";
      div.style.top = ann.y * this.viewport.height + "px";
      div.style.position = "absolute";
      this.$el.children[0].appendChild(div);
      div.onchange = e => {
        this.$socketio.emit("update_annotation", {
          x: ann.x,
          y: ann.y,
          data: div.value
        });
      };
      div.onclick = e => e.stopPropagation();
      return div;
    },
    deleteAnnotation(ann) {
      console.log("delete", ann);
      const id = "ann-" + ann.x + "-" + ann.y;
      document.getElementById(id).remove();
    }
  }
};
</script>