import { createApp } from 'vue';
import router from './router';
import store from './store/index';
import firebase from 'firebase';

import App from './App.vue';
import { QuillEditor } from "@vueup/vue-quill";
import BaseHeader from './components/ui/BaseHeader.vue';
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
  "apiKey": import.meta.env.VITE_API_KEY,
  "authDomain": import.meta.env.VITE_AUTH_DOMAIN,
  "projectId": import.meta.env.VITE_PROJECT_ID,
  "storageBucket": import.meta.env.VITE_STORAGE_BUCKET,
  "messagingSenderId": import.meta.env.VITE_MESSAGING_SENDER_ID,
  "appId": import.meta.env.VITE_APP_ID,
  "measurementId": import.meta.env.VITE_MEASUREMENT_ID
}

console.log(import.meta.env.MODE);
console.log(import.meta.env.VITE_API_KEY);
console.log(JSON.stringify(firebaseConfig));

firebase.initializeApp(firebaseConfig);

library.add(faChevronUp, faChevronDown);

const app = createApp(App);
app.use(router);
app.use(store);

app.component('base-header', BaseHeader);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('quill-editor', QuillEditor);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app');
