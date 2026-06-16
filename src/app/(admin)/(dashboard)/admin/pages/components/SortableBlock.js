"use client";

import { useSortable }
    from "@dnd-kit/sortable";

import { CSS }
    from "@dnd-kit/utilities";

import BlockEditor
    from "./BlockEditor";

export default function SortableBlock({
    block,
    blocks,
    setBlocks
}) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({
        id: block.id
    });

    const style = {
        transform:
            CSS.Transform.toString(
                transform
            ),
        transition
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
        >
            <BlockEditor
                block={block}
                blocks={blocks}
                setBlocks={setBlocks}
                dragHandleProps={{
                    ...attributes,
                    ...listeners
                }}
            />
        </div>
    );
}