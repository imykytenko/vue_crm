<template>
  <div class="tab">
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Ім'я</th>
        <th scope="col">Прізвище</th>
        <th scope="col">Пошта</th>
        <th scope="col">Номер телефону</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="author in authors" :key="author.ID">
        <th scope="row">{{ author.ID }}</th>
        <td data-label="Ім'я">{{ author.NAME }}</td>
        <td data-label="Прізвище">{{ author.LASTNAME }}</td>
        <td data-label="Пошта">{{ author.EMAIL }}</td>
        <td data-label="Номер телефону">{{ author.PHONE }}</td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Authors',
  data() {
    return {
      authors: [
        {
          ID: 1,
          NAME: 'Іван',
          LASTNAME: 'Франко',
          EMAIL: 'ivan.franko@example.com',
          PHONE: '+380123456789',
        },
        {
          ID: 2,
          NAME: 'Тарас',
          LASTNAME: 'Шевченко',
          EMAIL: 'taras.shevchenko@example.com',
          PHONE: '+380987654321',
        },
        {
          ID: 3,
          NAME: 'Леся',
          LASTNAME: 'Українка',
          EMAIL: 'lesya.ukrainka@example.com',
          PHONE: '+380567890123',
        },
        {
          ID: 4,
          NAME: 'Михайло',
          LASTNAME: 'Коцюбинський',
          COUNTRY: 'Україна',
          EMAIL: 'mykhailo.kotsiubynskyi@example.com',
          PHONE: '+380456789012',
        },
      ],
    };
  }
};
//
//export default {
//  name: 'Authors',
//  data() {
//    return {
//      authors: '',
//      isAdmin: ''
//    }
//  },
//  created() {
//    axios.get(`http://localhost:8080/getAuthors`, {
//      withCredentials:
//          true
//    })
//        .then((response) => {
//          this.authors = response.data.authors;
//        })
//        .catch((error) => {
//          console.log(error)
//        })
//
//  }
//}

</script>

<style>
body {
  background-color: #f1f1f1;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

.table {
  width: 1400px;
  background-color: #fff;
  color: #333;
  border-collapse: collapse;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

th, td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #343a40;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
}

tbody tr {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

tbody tr:hover {
  background-color: #e9ecef;
  transform: translateY(-3px);
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-primary {
  border-radius: 5px;
  background-color: black;
  color: #fff;
}

.btn-primary:hover{
  background-color: #565e64;
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

@media (max-width: 768px) {
  th, td {
    padding: 10px;
  }

  .table {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .table {
    width: 335px;
    font-size: 12px;
  }

  th, td {
    padding: 8px;
  }

  td {
    display: block;
    width: 100%;
  }

  th {
    display: none;
  }

  tr {
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }

  td:before {
    content: attr(data-label);
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
}
</style>