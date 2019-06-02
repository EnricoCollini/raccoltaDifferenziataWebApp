<template>
  <div class="container">
    <!-- ------------------------- -->
    <!-- ----SETTING CREATION----- -->
    <!-- ------------------------- -->
    <b-jumbotron header="Settings">
      <b-card-group deck>
        <b-card header=" " header-tag="header" footer=" " footer-tag="footer" title=" ">
          <!-- ----FORM CREATION----- -->
          <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label="Change Your Username:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.username"
                required
                placeholder="username : "
                type="text"
              ></b-form-input>
            </b-form-group>
            <!-- ---- SUBMIT BUTTON----- -->
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-card>

        <b-card header=" " header-tag="header" footer=" " footer-tag="footer" title=" ">
          <b-card-text>Upload a new profile image</b-card-text>
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Choose a file..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <!-- ----RESULT SDISPLAY----- -->
          <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
        </b-card>
      </b-card-group>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: ""
      },
      file: null
    };
  },
  methods: {
    //ON SUBMIT FORM FUNCTION
    onSubmit(evt) {
      evt.preventDefault();
      console.log(this.form);
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .container {
    padding-left: 5%;
  }
}
</style>

