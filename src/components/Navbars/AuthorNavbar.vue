<template>
    <div>
      <img src="/src/assets/logoNavbar.png" alt="Logo" class="logo">
        <h1 class="header">Publishing world</h1>
        <ul class="nav nav-underline ul">
            <li class="nav-item">
                <a class="nav-link" href="/NewApplication"
                   id="newApplication">Нова заявка</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="account"  href="/AccountAuthor">Акаунт
                </a>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: 'NavbarAuthor',
        props: {
            activePage_2: {
                type: String,
                required: true,
            }
        },
        mounted() {
            const activePage = document.getElementById(this.activePage_2);

            if (activePage) {
                console.log(activePage, 'active')
                activePage.classList.add('active');
                console.log(activePage.classList.add('active'));
            } else {
                console.error(`Element with ID ${this.activePage_2} not found.`);
            }
        }
    }
</script>

<style>
    .nav-item a{
        margin: 20px;
    }

    .logo {
      width: 160px;
      height: auto;
      display: block;
      margin: 0 auto 10px auto;
    }

    .header{
        text-align: center;
    }

    .ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

</style>