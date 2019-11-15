<template>
  <canvas v-visible.once="drawPage" v-bind="canvasAttrs"></canvas>
</template>

<script>
export default {
  name: "PDFPage",

  props: {
    page: {
      type: Object, // instance of PDFPageProxy returned from pdf.getPage
      required: true
    }
  },
  drawPage(){
      if(this.renderTask) return;

      const {viewport} = this;
      const canvasContext = this.$el.getContext('2d');
      const renderContext = {canvasContext, viewport};

      this.renderTask = this.page.render(renderContext);
      this.renderTask.
        then(() => this.emit('rendered', this.page));
  }
};
</script>
