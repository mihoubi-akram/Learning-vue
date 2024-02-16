export default {
    template :`
    <label>
        {{ assignment.name }}
        <input type="checkbox" v-model="assignment.complete">
    </label>
    `,
    props:{
        assignment:Object
    }

}