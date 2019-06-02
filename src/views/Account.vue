<template>
  <div class="container">
    <!-- ------------------------------ -->
    <!-- ----ACCOUNT PAGE CREATION----- -->
    <!-- ------------------------------ -->
    <b-jumbotron header="Your Profile">
      <!-- ----profile image & title----- -->
      <b-card
        no-body
        style="max-width: 20rem;"
        img-src="data:image/png;base64,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"
        img-alt="Image"
        img-top
      >
        <h4 slot="header">Account</h4>

        <!-- ----name section----- -->
        <b-card-body>
          <b-card-title>Name:</b-card-title>
          <b-card-sub-title class="mb-2">Enrico Collini</b-card-sub-title>
        </b-card-body>

        <b-list-group flush>
          <!-- ----username section----- -->
          <b-list-group-item>
            <b-card-title>Username:</b-card-title>
            <b-card-sub-title class="mb-2">enricoll</b-card-sub-title>
          </b-list-group-item>
          <!-- ----email section----- -->
          <b-list-group-item>
            <b-card-title>e-mail:</b-card-title>
            <b-card-sub-title class="mb-2">encollini@gmail.com</b-card-sub-title>
          </b-list-group-item>
          <!-- ----gender section----- -->
          <b-list-group-item>
            <b-card-title>Gender:</b-card-title>
            <b-card-sub-title class="mb-2">Male</b-card-sub-title>
          </b-list-group-item>
        </b-list-group>
        <b-card-footer></b-card-footer>

        <b-card-img
          src="https://www.gstatic.com/earth/social/00_generic_facebook-001.jpg"
          alt="Image"
          bottom
        ></b-card-img>
      </b-card>
    </b-jumbotron>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media screen and (max-width: 600px) {
  .container {
    padding-left: 5%;
  }
}
</style>
