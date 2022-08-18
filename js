import {LightningElement, wire} from 'lwc';
import getPdfDownloadLink from '@salesforce/apex/PdfDownloadHelper.getPdfDownloadLink';

export default class PdfDownloadExample extends LightningElement {
   pdfDownloadLink;

   @wire(getPdfDownloadLink, {})
   getPdfLink({ error, data }) {
       if (data) {
           console.log('pdfDownloadLink: ' + data);
           this.pdfDownloadLink = data;
       } else {
           if(error){
               console.log('error: ', error);
           }
       }
   }
}
