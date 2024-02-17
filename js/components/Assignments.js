import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList ,AssignmentCreate},
    template: `
    <section class="space-y-6">
        <assignment-list :assignments =" inProgressAssignments" title="In Progress"> </assignment-list>
        <assignment-list :assignments =" completedAssignments" title="Complete"> </ assignment-list>
        <assignment-create @add="add"> </ assignment-create>

    </section>
    `,
    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false,id: 1,tag:"math"},
                { name: 'Read Chapter 4', complete: false,id: 2,tag:"science"},
                { name: 'Turn in Homework', complete: false,id: 3,tag:"physique"},
            ]
        }
    },

    computed: {
        inProgressAssignments() {
            return this.assignments.filter(assignment => !assignment.complete);
        },

        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete);
        }
    },

    methods : {
        add(name){
            this.assignments.push({
                name : name,
                complete : false,
                id:this.assignments.length+1

            })
            thi
        }
    }

}