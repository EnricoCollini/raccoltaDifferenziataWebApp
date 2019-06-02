<template>
  <div class="container">
    <!-- ------------------------------ -->
    <!-- ----RECYCLE PAGE CREATION----- -->
    <!-- ------------------------------ -->
    <b-jumbotron>
      <h1 style="margin-botton:40px;">What have you recycled?</h1>
      <div>
        <!-- ----FORM CREATION----- -->
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <!-- ----ORGANIC INPUT----- -->
          <b-form-group id="input-group-1" label="organic Kg:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.organico"
              required
              placeholder="Tot kg: "
              type="number"
              min="0"
            ></b-form-input>
            <!-- ----GLASS INPUT----- -->
          </b-form-group>
          <b-form-group id="input-group-1" label="Glass Kg:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.vetro"
              required
              placeholder="Tot kg: "
              type="number"
              min="0"
            ></b-form-input>
          </b-form-group>
          <!-- ----PACKAGING INPUT----- -->
          <b-form-group id="input-group-1" label="packaging and containers Kg:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.imballaggi"
              required
              placeholder="Tot kg: "
              type="number"
              min="0"
            ></b-form-input>
          </b-form-group>
          <!-- ----PAPER INPUT----- -->
          <b-form-group id="input-group-1" label="paper and cardboard Kg:" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.carta"
              required
              placeholder="Tot kg: "
              type="number"
              min="0"
            ></b-form-input>
          </b-form-group>

          <!-- ----SUBMIT BUTTON----- -->
          <b-button @click.prevent="onSubmit" variant="primary">Submit</b-button>
        </b-form>
        <!-- ----RESULTS DISPLAY----- -->
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import { client } from "../utils/httpClient";
import { version } from "punycode";
import User from "../utils/userClass";
//  new User().mail
export default {
  data() {
    return {
      // FORM DATAS: ORGANICO VETRO IMBALLAGGI CARTA
      form: {
        organico: 0,
        vetro: 0,
        imballaggi: 0,
        carta: 0
      },
      show: true
    };
  },
  mounted() {
    client
      .fetch('*[_type == "rifiuti" && mail=="encollini@gmail.com"]')
      .then(response => console.log(response));
  },

  methods: {
    // SUMBIT FORM FUNCTION
    onSubmit() {
      let { carta, organico, imballaggi, vetro } = this.form;

      client
        .create({
          _type: "rifiuti",
          carta: parseInt(carta),
          dataRiciclaggio: new Date(),
          imballaggi: parseInt(imballaggi),
          mail: "encollini@gmail.com",
          organico: parseInt(organico),
          vetro: parseInt(vetro)
        })
        .then(res => {
          console.log(`form was created, document ID is ${res._id}`);
        });
    },
    // ON RESET FORM FUNCTION
    onReset(evt) {
      evt.preventDefault();
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
</style>
