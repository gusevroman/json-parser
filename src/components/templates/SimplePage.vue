<template>
  <div>
    <h1>{{props.H1Content}}</h1>
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
    </table>>>>>
  </div>
</template>

<script>
export default {
  name: "SimplePage",
  props: {
    H1Content,
    TableName,
    ColsTitles,
    Data,
  },
  ColsTypes: {
    NUM: {
      type: Number,
      required: true
    },
    STR: {
      type: String,
      required: true
    },
    TAREA: {
      type: String,
      required: false
    },
    DATE: {
      type: Date,
      required: true
    },
    DTIME: {
      type: Date,
      required: false
    }
  }
};
</script>
