// а) В соответствии со значением ключа "PageTemplate" (в JSON, конечно, далее просто опускаю это) 
должен загрузиться и примениться шаблон оформления страницы (для примера идет "SimplePage").

//     б) По значению ключа "PageTitle" должен быть установлен заголовок страницы 
(<title>{value}</title>).

//     в) По значению ключа "H1Content" должен быть установлен заголовок H1 в начале страницы 
(<h1>{value}</h1>).

//     г) По значению ключа "TableName" должен быть установлен заголовок H2 для названия перед таблицей
 (<h2>{value}</h2>).

//     д) По значениям ассоциативного массива ключа "ColsTitles" должны быть сформированы заголовки 
колонок для таблицы 

(<th>{value}</th>) и расположены в порядке, который определен в значениях ассоциативного массива 
ключа "ColsTypes". А также не должны выводиться те колонки, которые имеют значения "0" 
в ассоциативном массиве ключа "ColsShow".

"ColsTitles": {
        "id_ves": "ID",
        "date": "Дата",
        "permit": "Разрешение",
        "id_rank": "Категория",
        "id_region": "Регион",
        "id_region_to": "Регион следования",
        "date_arrival": "Дата прибытия",
        "id_information_source": "Источник информации",
        "timestamp": "Дата, время",
        "note": "Примечание",
        "datetime": "Дата, время 2",
        "id_regime": "Код запаса"
    },
  "ColsTypes": {
        "id_ves": "NUM",
        "date": "DATE",
        "permit": "STR",
        "id_rank": "NUM",
        "id_region": "NUM",
        "id_region_to": "NUM",
        "date_arrival": "DATE",
        "id_information_source": "NUM",
        "timestamp": "DTIME",
        "note": "TAREA",
        "datetime": "DTIME",
        "id_regime": "NUM"
    },

//     е) Добавить строки в таблицу с данными из массива "Data".

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
