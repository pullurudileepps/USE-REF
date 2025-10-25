import React, { useRef } from 'react'

const Focus = () => {
    const inputRef = useRef(null);
    return (
        <div style={{ display: "flex", gap: "5px" }}>
            <input ref={inputRef} type="text" style={{ border: "1px solid gray" }} />
            <button style={{ background: "brown", color: "white" }} onClick={() => inputRef.current.focus()}>Focus</button>
        </div>
    )
}

export default Focus