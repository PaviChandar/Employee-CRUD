interface EditProps {
    editHandler: () => void
}


const EditComponent: React.FC<EditProps> = ({ editHandler }) => {
    return (
        <div>
            <h1>Edit component</h1>
            <input type="text" placeholder="name" />
            <button onClick={editHandler}>Update</button>
        </div>
    )
}

export default EditComponent