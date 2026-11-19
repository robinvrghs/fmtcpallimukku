
"use client";

import {
    DndContext,
    closestCenter,
    PointerSensor,
    KeyboardSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";

import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
    sortableKeyboardCoordinates
} from "@dnd-kit/sortable";

import SortableBlock from "./SortableBlock";

export default function SortableBlocks({ blocks = [], setBlocks }) {

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8
            }
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const handleDragEnd = ({ active, over }) => {
        if (!over || active.id === over.id) return;

        const oldIndex = blocks.findIndex(
            block => block.id === active.id
        );

        const newIndex = blocks.findIndex(
            block => block.id === over.id
        );

        if (oldIndex === -1 || newIndex === -1) return;

        setBlocks(previous =>
            arrayMove(previous, oldIndex, newIndex)
        );
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={blocks.map(block => block.id)}
                strategy={verticalListSortingStrategy}
            >
                {blocks.map(block => (
                    <SortableBlock
                        key={block.id}
                        block={block}
                        setBlocks={setBlocks}
                    />
                ))}
            </SortableContext>
        </DndContext>
    );
}
