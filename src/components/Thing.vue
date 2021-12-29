<template>
    <div class = "container">
            
            <h1 class = "text-center"> Things List</h1>

            <table class = "table table-striped">
                <thead>
                    <tr>
                        <th> Thing Id</th>
                        <th> Thing content</th>
                        <th> Category Id</th>
                        <th> Parent Id</th>
                    </tr>

                </thead>
                <tbody>
                    <tr v-for="thing in things" v-bind:key="thing.id">
                        <td> {{thing.id }}</td>
                        <td> {{thing.content }}</td>
                        <td> {{thing.categoryId}}</td>    
                        <td> {{thing.parentCategoryId}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>

<script>

import ThingService from '../services/ThingService';

export default {
    name: 'Things',
    data(){
        return {
            things: []
        }
    },
    methods: {
        getThings(){
            ThingService.getThings().then((response) => {
                this.things = response.data;   
            });
        }
    },
    created() {
        this.getThings();
    }
}

</script>