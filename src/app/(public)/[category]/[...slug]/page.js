
import { Box, Container, Grid } from "@mui/material";
import RenderBlock from "./components/RenderBlock";
import SubMenu from "@/app/components/public/SubMenu";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page({ params }) {
    const { category, slug } = await params;

    const pagePath = [category, ...slug];

    const query = new URLSearchParams({
        path: pagePath.join("/"),
    });

    const response = await fetch(
        `https://fmtcpallimukku.ac.in/api/pages/get-page-by-path.php?${query.toString()}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        notFound();
    }

    const data = await response.json();

    if (!data.status || !data.page) {
        notFound();
    }

    const page = data.page;

    const blocks = data.page.blocks || [];

    // Extract the hero block
    const heroBlock = blocks.find(
        (block) => block.type === "page_hero"
    );

    // Remaining content blocks
    const contentBlocks = blocks.filter(
        (block) => block.type !== "page_hero"
    );

    return (
        <Box>

            {heroBlock && (
                <RenderBlock block={heroBlock} />
            )}

            <Container maxWidth="lg" sx={{ py: { xs: 5, md: 10 } }}>
                <Grid container spacing={{ xs: 4, md: 5 }}>
                    <Grid size={{ xs: 12, md: 9 }}>
                        {contentBlocks.map((block) => (
                            <Box
                                key={block.id}
                                id={`section-${block.id}`}
                            >
                                <RenderBlock block={block} />
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box
                            sx={{
                                position: { md: "sticky" },
                                top: { md: 110 },
                            }}
                        >
                            <SubMenu
                                title={page.category_name}
                                categorySlug={page.category_slug}
                                pages={page.category_pages || []}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
