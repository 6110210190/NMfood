import { db } from '../firebase';
import {collection} from '@firebase/firestore'

function DeleteOrder() {
    /* โค้ด realtime subscription */

    async function deleteDocument(id) {
        const orderCollectionRef = collection(db, "order"); 
        // ประกาศตัวแปรเพื่ออ้างอิงไปยัง document ที่จะทำการลบ
        const documentRef = orderCollectionRef.doc(id)
        // ลบ document
        await documentRef.delete()

        alert(`document ${ id } has been deleted`)
    }

    return <div>
        { Object.keys(users).map(id => {
            return <button key={ id } onClick={ () => deleteDocument(id) }>Delete { id }</button>
        }) }
    </div>
}

export default DeleteOrder;