import { createApp } from 'vue';
import router from './router';
import store from './store/index';
import firebase from 'firebase';

import App from './App.vue';
import { QuillEditor } from "@vueup/vue-quill";
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

var firebaseConfig = {
  "apiKey": process.env.API_KEY,
  "authDomain": process.env.AUTH_DOMAIN,
  "projectId": process.env.PROJECT_ID,
  "storageBucket": process.env.STORAGE_BUCKET,
  "messagingSenderId": process.env.MESSAGING_SENDER_ID,
  "appId": process.env.APP_ID,
  "measurementId": process.env.MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig);

library.add(faChevronUp, faChevronDown);

const app = createApp(App);
app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('quill-editor', QuillEditor);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app');
