"use client";

import {
    DndContext,
    closestCenter
} from "@dnd-kit/core";

import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove
} from "@dnd-kit/sortable";

import SortableBlock from "./SortableBlock";

export default function SortableBlocks({
    blocks,
    setBlocks
}) {

    const handleDragEnd = (event) => {

        const { active, over } = event;

        if (!over) return;

        if (active.id === over.id)
            return;

        const oldIndex =
            blocks.findIndex(
                block =>
                    block.id === active.id
            );

        const newIndex =
            blocks.findIndex(
                block =>
                    block.id === over.id
            );

        setBlocks(
            arrayMove(
                blocks,
                oldIndex,
                newIndex
            )
        );
    };

    return (
        <DndContext
            collisionDetection={
                closestCenter
            }
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={(blocks ?? []).map(block => block.id)}
                strategy={verticalListSortingStrategy}
            >
                {(blocks ?? []).map(block => (
                    <SortableBlock
                        key={block.id}
                        block={block}
                        blocks={blocks}
                        setBlocks={setBlocks}
                    />
                ))}
            </SortableContext>
        </DndContext>
    );
}