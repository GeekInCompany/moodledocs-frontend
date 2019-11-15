<template>
  <v-layout>
    <PDFDocument :pages="pages" />
  </v-layout>
</template>

<script>
import PDFDocument from "~/components/PDFDocument";
import pdfjsLib from "pdfjs-dist";

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
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    };
  },
  mounted() {
    import("pdfjs-dist/webpack").then(pdfjsLib => {
      var loadingTask = pdfjsLib.getDocument(this.src);
      loadingTask.promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
          this.pages.push(page);
        });
      });
    });
  }
};
</script>
