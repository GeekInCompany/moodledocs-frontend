<template>
  <v-layout>
    <PDFDocument :pages="pages" />
  </v-layout>
</template>

<script>
import PDFDocument from "~/components/PDFDocument";
import pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  '/node_modules/pdfjs-dist/build/pdf.worker.js';

export default {
  components: {
    PDFDocument
  },
  data() {
    return {
      pages: [],
      currentPage: 0,
      pageCount: 0,
      src:
        "https://hackathon.hopfenspace.org/skript.pdf"
    };
  },
  mounted() {
      let ctx = this;
      var loadingTask = pdfjsLib.getDocument(this.src);
      loadingTask.promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
          ctx.pages.push(page);
        });
      });
  }
};
</script>
