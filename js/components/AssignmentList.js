import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";
export default {
    components :{Assignment,AssignmentTags},
    template:`
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2">
            {{title}} ({{assignments.length}})
        </h2>
        <assignment-tags 
        :initialTags="assignments.map(a => a.tag)"
        @change="currentTag =$event">
        </assignment-tags>
        <ul class ="border border-gray-600 divide-y divide-gray-600 mt-6">
            <assignment
            v-for="assignment in filteredAssignments"
            :key="assignment.id" 
            :assignment="assignment"> </assignment>
        </ul>
    </section>`,
    props: {
        assignments: Array,
        title: String
    },

    data(){
        return{
           currentTag:"All", 
        } 
        
    },
    computed:{

        filteredAssignments() {
            if (this.currentTag === 'All') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        },
        tags(){
            return ['All', ...new Set(this.assignments.map(a => a.tag))];
        }
    },
    methods:{
        handleclick(tag){
            this.currentTag = tag
        }
    }

}