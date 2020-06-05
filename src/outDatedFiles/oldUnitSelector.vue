<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <table class="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Points</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <template v-for="data in parentData.hqUnit">
                    <tr v-bind:key="data.size">
                        <td>{{data.name}}</td>
                        <td>{{data.points}}</td>
                        <td>
                            <button :disabled="inputValue" class="button is-primary" @click="selected(data)">Add</button>
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
            <button
                class="button is-primary"
                @click="close"
            >
                Close me!
            </button>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'UnitSelector',
        data() {
            return {
                selectedUnits: [],
                inputValue: false,
            }
        },
        props: {
            parentData: Object,
        },
        methods: {
            close() {
                console.log('thisis close')
                console.log(this.selectedUnits)
                this.$emit('childToParent', this.selectedUnits)
                this.$emit('child2ToParent', 'hqUnits')
                this.$emit('close');
            },

            selected(data) {
                console.log('the data')
                console.log(data.name)
                const test = {
                    name: data.name,
                    points: data.points
                }
                console.log(test)
                this.selectedUnits.push(test)
                this.inputValue = false
            }
        },
    };
</script>
<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
