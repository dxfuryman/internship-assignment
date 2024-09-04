import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableComponent from './DraggableComponent';
import DroppableArea from './DroppableArea';

const FormBuilder = () => {
    const [formComponents, setFormComponents] = useState([]);
    const [formValues, setFormValues] = useState({});

    const handleDrop = (item) => {
        setFormComponents([...formComponents, item]);
    };

    const handleInputChange = (index, event) => {
        const newFormValues = { ...formValues };
        newFormValues[index] = event.target.value;
        setFormValues(newFormValues);
    };

    const handleCheckboxChange = (index, event) => {
        const newFormValues = { ...formValues };
        newFormValues[index] = event.target.checked;
        setFormValues(newFormValues);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '200px', marginRight: '16px' }}>
                    <h3>Components</h3>
                    <DraggableComponent type="input" label="Input Field" />
                    <DraggableComponent type="textarea" label="Textarea" />
                    <DraggableComponent type="select" label="Select Dropdown" />
                    <DraggableComponent type="checkbox" label="Checkbox" />
                    <DraggableComponent type="radio" label="Radio Button" />
                    <DraggableComponent type="date" label="Date Picker" />
                    <DraggableComponent type="file" label="File Uploader" />
                    <DraggableComponent type="button" label="Button" />
                    <DraggableComponent type="email" label="Email Input" />
                    <DraggableComponent type="password" label="Password Input" />
                </div>
                <div style={{ flex: 1 }}>
                    <h3>Form Layout</h3>
                    <DroppableArea onDrop={handleDrop}>
                        {formComponents.map((component, index) => {
                            let formElement;
                            switch (component.type) {
                                case 'input':
                                    formElement = (
                                        <input
                                            type="text"
                                            placeholder={component.label}
                                            value={formValues[index] || ''}
                                            onChange={(e) => handleInputChange(index, e)}
                                            style={{ width: '100%' }}
                                        />
                                    );
                                    break;
                                case 'textarea':
                                    formElement = (
                                        <textarea
                                            placeholder={component.label}
                                            value={formValues[index] || ''}
                                            onChange={(e) => handleInputChange(index, e)}
                                            style={{ width: '100%' }}
                                        />
                                    );
                                    break;
                                case 'select':
                                    formElement = (
                                        <select
                                            value={formValues[index] || ''}
                                            onChange={(e) => handleInputChange(index, e)}
                                            style={{ width: '100%' }}
                                        >
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    );
                                    break;
                                case 'checkbox':
                                    formElement = (
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={formValues[index] || false}
                                                onChange={(e) => handleCheckboxChange(index, e)}
                                            />
                                            {component.label}
                                        </label>
                                    );
                                    break;
                                case 'radio':
                                    formElement = (
                                        <label>
                                            <input
                                                type="radio"
                                                name="radioGroup"
                                                checked={formValues[index] || false}
                                                onChange={(e) => handleCheckboxChange(index, e)}
                                            />
                                            {component.label}
                                        </label>
                                    );
                                    break;
                                case 'date':
                                    formElement = (
                                        <input
                                            type="date"
                                            value={formValues[index] || ''}
                                            onChange={(e) => handleInputChange(index, e)}
                                            style={{ width: '100%' }}
                                        />
                                    );
                                    break;
                                case 'file':
                                    formElement = (
                                        <input
                                            type="file"
                                            onChange={(e) => handleInputChange(index, e)}
                                            style={{ width: '100%' }}
                                        />
                                    );
                                    break;
                                case 'button':
                                    formElement = (
                                        <button
                                            type="button"
                                            onClick={() => alert('Button clicked!')}
                                            style={{ width: '100%' }}
                                        >
                                            {component.label}
                                        </button>
                                    );
                                    break;
                                case 'email':
                                    formElement = (
                                        <input
                                            type="email"
                                            placeholder={component.label}
                                            value={formValues[index] || ''}
                                            onChange={(e) => handleInputChange(index, e)}
                                            style={{ width: '100%' }}
                                        />
                                    );
                                    break;
                                case 'password':
                                    formElement = (
                                        <input
                                            type="password"
                                            placeholder={component.label}
                                            value={formValues[index] || ''}
                                            onChange={(e) => handleInputChange(index, e)}
                                            style={{ width: '100%' }}
                                        />
                                    );
                                    break;
                                default:
                                    formElement = null;
                            }
                            return (
                                <div
                                    key={index}
                                    style={{
                                        padding: '8px',
                                        border: '1px solid white',
                                        marginBottom: '4px',
                                        backgroundColor: 'black',
                                        color: 'white',
                                    }}
                                >
                                    {formElement} {index < 3 && '(Required)'}
                                </div>
                            );
                        })}
                    </DroppableArea>
                </div>
            </div>
        </DndProvider>
    );
};

export default FormBuilder;
