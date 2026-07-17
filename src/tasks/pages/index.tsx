/*
    This page is used to create new tasks
*/

import { useParams } from "react-router-dom";

const TaskDetail = () => {
    const { id } = useParams();

    return (
        <div>
            <section>
                {id}
                {/*task.status*/} 
                {/*task.title*/} 
                {/*task.dueDate*/}
                {/*task.priority*/}
            </section>

            <section>
                {/*task.description*/}
            </section>

            <section>
                {/*task.responsibles*/}
            </section>

             <section>
                {/*task.comments*/}
                add new comment
                <div>
                    <img src="" alt="" />
                    <div>
                        <textarea name="" id="">Inserta tu comentario</textarea>
                    </div>
                    <button>
                        Comentar
                    </button>
                </div>
            </section>



        </div>
    )
}

export default TaskDetail;