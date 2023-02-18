<template>
  <div>
    <b-list-group class="list">
      <h5>Lista de confirmações</h5>
      <b-badge class="badge-p">
        {{ countTotal }} confirmações
      </b-badge>
      <br>
      <b-list-group-item
        v-for="confirm in confirmations"
        :key="confirm._id"
        class="mt-2"
        style="border:1px solid #ccc; border-radius:5px;"
      >
      <section>
        <b>{{ confirm.name }}</b>
      </section>
      <p>
        {{ confirm.message }}
      </p>

        <b-badge v-if="confirm.date" variant="primary" class="badge-s">
          em <b>{{ confirm.formattedDate.split(' ')[0] }}</b> às <b>{{ confirm.formattedDate.split(' ')[1] }}</b>
      </b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      confirmations: []
    }
  },
  mounted() {
    this.findAllConfirmations()
  },
  methods: {

    async findAllConfirmations() {
      console.log("Hello!")
      const confirmations = await (await this.$ConfirmationService.findAll()).json();
      this.confirmations = confirmations
    }

  },
  computed: {
    countTotal() {
      return this.confirmations.length
    }
  }
}
</script>

<style scoped>

.list {
  margin:0 auto;
  max-width: 500px;
  margin-top: 5%;
  width: 90%;
}

.badge-p {
  width: 105px;
  background-color: #B9A389;
}
.badge-s {
  width: 185px;
  background-color: #B9A389;
}

</style>
