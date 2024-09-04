import React from 'react';
import { useDrop } from 'react-dnd';

const DroppableArea = ({ onDrop, children }) => {
    const [, drop] = useDrop({
        accept: 'FORM_COMPONENT',
        drop: (item) => onDrop(item),
    });

    return (
        <div ref={drop} style={{ minHeight: '300px', border: '2px dashed #ccc', padding: '16px' }}>
            {children}
        </div>
    );
};

export default DroppableArea;
