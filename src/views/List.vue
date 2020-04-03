<template>
  <div>
    <SimplePage />
    
    <h1>{{H1Content}}</h1>
    <h2>{{TableName}}</h2>

    <table class="responsive-table">
      <thead>
        <th v-for="data in ColsTitles">{{data}}</th>
      </thead>

      <tbody>
        <tr v-for="row in Data">
          <td v-for="rowData in row">{{rowData}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import json from "@/api/example.json";
export default {
  name: "List",
  data: () => ({
    json,
    H1Content: json.H1Content,
    TableName: json.TableName,
    ColsTitles: json.ColsTitles,
    Data: json.Data
  }),
  components: {
    SimplePage: () => import("@/components/templates/SimplePage.vue")
  },
  mounted: () => {
    document.title = json.PageTitle;
  }
};
</script>

<style lang="scss" scoped>
</style>
