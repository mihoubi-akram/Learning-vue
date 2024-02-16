import AssignmentList from "./AssignmentList.js";
export default {
    components: { AssignmentList },
    template: `
        <assignment-list :assignments =" inProgressAssignments" title="In Progress"> </assignment-list>
        <assignment-list :assignments =" completedAssignments" title="Complete"> </assignment-list>
    `,
    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false,id: 1},
                { name: 'Read Chapter 4', complete: false,id: 2},
                { name: 'Turn in Homework', complete: false,id: 3},
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
    }

}