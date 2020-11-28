<template>
  <div class="navbar">
    <b-nav>
      <b-nav-item class="m-2" to="/"
        ><b-icon class="house" icon="house" aria-hidden="true"></b-icon>
        Home</b-nav-item
      >

      <b-nav-item-dropdown class="m-2 dparka" text="Games">
        <b-dropdown-header id="dropdown-header-label">
          BLIZZARD GAMES
        </b-dropdown-header>
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <img src="../assets/menuwow.svg" /> World of Warcraft
        </b-dropdown-item-button>
        <b-dropdown-item-button to="productpage">
          <img src="../assets/menuow.svg" /> Overwatch
        </b-dropdown-item-button>
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <img src="../assets/menudiablo3.svg" />Diablo III
        </b-dropdown-item-button>
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <img src="../assets/menuhearthstone.svg" /> Hearthstone
        </b-dropdown-item-button>
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <img src="../assets/menuheroes-of-the-storm.svg" /> Heroes of the
          Storm
        </b-dropdown-item-button>
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <img src="../assets/menustarcraft-ii .svg" /> StarCraft II
        </b-dropdown-item-button>
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <img src="../assets/menustarcraft-remastered.svg" />StarCraft
        </b-dropdown-item-button>
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <img src="../assets/menudiablo-ii (1).svg" /> Diablo II
        </b-dropdown-item-button>
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <img src="../assets/menuwarcraft-iii (1).svg" /> Warcraft III
        </b-dropdown-item-button>
        <b-dropdown-header id="dropdown-header-label">
          Partner Games
        </b-dropdown-header>

        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <img src="../assets/menucall-of-duty-black-ops-cold-war.svg" /> Call
          of Duty: BOCW
        </b-dropdown-item-button>
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <img src="../assets/menucall-of-duty-mw (1).svg" /> Call of Duty: MW
        </b-dropdown-item-button>
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <img src="../assets/menucall-of-duty (1).svg" /> Call of Duty: BO4
        </b-dropdown-item-button>
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <img src="../assets/menucall-of-duty-mw2cr.svg" /> Call of Duty: MW2CR
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown class="m-2 dparka" text="Services">
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <b-icon icon="tag" aria-hidden="true"></b-icon> BattleTag Change
        </b-dropdown-item-button>
        <b-dropdown-item-button>
          <b-icon icon="plus-circle" aria-hidden="true"></b-icon> Redeem a Code
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
      <b-nav-item class="m-2" to="/">
        Blizzard Gear
        <b-icon
          icon="box-arrow-up-right"
          aria-hidden="true"
          font-scale="1"
        ></b-icon
      ></b-nav-item>
      <b-nav-form>
        <b-input-group size="sm" class="search">
          <b-input-group-prepend>
            <b-button variant="outline-info"
              ><b-icon icon="search" aria-hidden="true" font-scale="1"></b-icon
            ></b-button>
          </b-input-group-prepend>
          <b-form-input type="text"></b-form-input>
        </b-input-group>
      </b-nav-form>
      <b-nav-item class="m-2 kalp" to="/">
        <b-icon icon="heart-fill" aria-hidden="true" font-scale="1"></b-icon>
        Wish List
      </b-nav-item>
      <b-nav-item-dropdown class="m-2 dparka" text="Blizzard Balance">
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <b-icon icon="plus-circle" aria-hidden="true"></b-icon> Add Balance
        </b-dropdown-item-button>
        <b-dropdown-item-button>
          <b-icon icon="arrow-right-circle" aria-hidden="true"></b-icon> Gift
          Balance
        </b-dropdown-item-button>
        <b-dropdown-item-button>
          <b-icon icon="credit-card-fill" aria-hidden="true"></b-icon> Add
          Pre-Paid Card
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
    </b-nav>
  </div>
</template>

<script>
export default {}
</script>
<style>
.navbar {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  background-color: #002650;
  font-size: 14px;
  padding: 0 5rem 0 5rem;
  color: rgba(255, 255, 255, 0.8);
}
.nav-link {
  color: inherit;
}
.nav-link:hover {
  color: white;
}
.house {
  color: #0e86ca;
}
.dparka ul {
  background: linear-gradient(#1c2534, #161a26);
  border: none;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}

.dparka ul li button {
  color: rgba(255, 255, 255, 0.8);
  border: none;
  outline: none;
}
.dparka ul li button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  color: inherit;
}
</style>
<style scoped>
img {
  height: 20px;
  width: 20px;
}
.search {
  width: 30rem;
  margin-left: 30rem;
}
.search button,
input {
  color: #0e86ca;
  background-color: #001732;
  border: 1px solid rgba(255, 255, 255, 0.15);
}
.search button {
  border-right: none;
}
.search button:focus,
input:focus {
  height: 40px;
  background-color: #001732;
  outline: none;
}
.kalp {
  border: 1px solid rgba(255, 255, 255, 0.15);
  height: 120%;
}
</style>
