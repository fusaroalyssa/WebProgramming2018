<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/" >Profile</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/weight">Weight</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/food">Food</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/exercise">Exercise</router-link>
            </li>     
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/friends">Friends</router-link>
            </li> 
        </ul>
    </nav>
</template>

<style lang="sass">
  
</style>


<script>

export default {
    
}
</script>

