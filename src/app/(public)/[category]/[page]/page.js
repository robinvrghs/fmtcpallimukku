import { Box } from "@mui/material";
import RenderBlock from "./components/RenderBlock";

export default async function Page({ params }) {

    const { category, page } = await params;

    console.log("Fetching:", page);

    const response =
        await fetch(
            `https://fmtcpallimukku.ac.in/api/pages/get-page-by-slug.php?slug=${page}`,
            { cache: "no-store" }
        );

    console.log("Status:", response.status);

    const data = await response.json();

    console.log("Data:", data);

    if (!data.success) {

        return (
            <div>
                Page not found
            </div>
        );
    }

    return (
        <Box>

            {data.page.blocks.map(
                block => (
                    <RenderBlock
                        key={block.id}
                        block={block}
                    />
                )
            )}

        </Box>
    );
}