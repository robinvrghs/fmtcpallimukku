
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    Stack,
    Chip,
    Button,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import {
    VisibilityOutlined,
    TrackChangesOutlined,
    GroupsOutlined,
    PictureAsPdfOutlined,
    DownloadOutlined,
} from "@mui/icons-material";
import PageHero from "@/app/components/public/PageHero";

export default function RenderBlock({ block }) {

    if (!block || !block.type) return null;

    const renderImage = (src, alt = "", sx = {}) => {
        if (!src) return null;

        return (
            <Box
                component="img"
                src={src}
                alt={alt}
                loading="lazy"
                sx={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    ...sx,
                }}
            />
        );
    };

    switch (block.type) {

        // ==========================================
        // EXISTING BLOCKS
        // ==========================================

        case "title":

            return (
                <Box data-aos="fade-up" sx={{ mb: 3 }}>
                    <Typography variant="h4">
                        {block.content}
                    </Typography>
                    <Divider sx={{ mt: 1 }} />
                </Box>
            );

        case "subtitle":

            return (
                <Box data-aos="fade-up" sx={{ mb: 3 }}>
                    <Typography variant="h6">
                        {block.content}
                    </Typography>
                    <Divider sx={{ mt: 1 }} />
                </Box>
            );

        case "paragraph":

            return (
                <Box data-aos="fade-up">
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: "justify",
                            mb: 5,
                            lineHeight: 1.9,
                            whiteSpace: "pre-line",
                        }}
                    >
                        {block.content}
                    </Typography>
                </Box>
            );

        case "image":

            return (
                <Box sx={{ mb: 5 }} data-aos="fade-up">

                    {renderImage(block.url, block.alt, {
                        borderRadius: "20px",
                        boxShadow: "4px 14px 28px rgba(0,0,0,0.1)",
                    })}

                    {block.caption && (
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ display: "block", mt: 1 }}
                        >
                            {block.caption}
                        </Typography>
                    )}

                </Box>
            );

        case "file":

            return (
                <Box sx={{ mb: 5 }} data-aos="fade-up">

                    {block.title && (
                        <Box data-aos="fade-up" sx={{ mb: 3 }}>
                            <Typography variant="h4">
                                {block.title}
                            </Typography>
                            <Divider sx={{ mt: 1 }} />
                        </Box>
                    )}

                    <TableContainer
                        sx={{
                            border: "1px solid #E8EAF0",
                            borderRadius: 0.5,
                            overflow: "hidden"
                        }}
                    >
                        <Table>
                            <TableHead>
                                <TableRow sx={{ bgcolor: "#F5F7FA" }}>
                                    <TableCell sx={{ fontWeight: 700 }}>
                                        File Name
                                    </TableCell>

                                    <TableCell align="center" sx={{ fontWeight: 700, width: 110 }}>
                                        View
                                    </TableCell>

                                    <TableCell align="center" sx={{ fontWeight: 700, width: 130 }}>
                                        Download
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {(block.items || []).map((file, index) => (
                                    <TableRow
                                        key={file.id || index}
                                        hover
                                    >
                                        <TableCell>
                                            <Stack
                                                direction="row" spacing={1.5}
                                                sx={{ alignItems: "center" }}
                                            >
                                                <Box sx={{ color: "secondary.main", display: "flex" }}>
                                                    <PictureAsPdfOutlined />
                                                </Box>

                                                <Typography variant="body2" fontWeight={500}>
                                                    {file.filename}
                                                </Typography>
                                            </Stack>
                                        </TableCell>

                                        <TableCell align="center">
                                            <Button
                                                component="a"
                                                href={file.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                size="small"
                                                startIcon={<VisibilityOutlined />}
                                            >
                                                View
                                            </Button>
                                        </TableCell>

                                        <TableCell align="center">
                                            <Button
                                                component="a"
                                                href={file.url}
                                                download={file.filename || true}
                                                size="small"
                                                variant="contained"
                                                color="secondary"
                                                startIcon={<DownloadOutlined />}
                                            >
                                                Download
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}

                                {(!block.items || block.items.length === 0) && (
                                    <TableRow>
                                        <TableCell colSpan={3} align="center">
                                            No files available.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Box>
            );

        case "list":

            return (
                <List sx={{ mb: 5 }} data-aos="fade-up">

                    {(block.items || []).map((item, i) => (
                        <ListItem key={i} sx={{ alignItems: "center" }}>
                            <ListItemIcon sx={{ minWidth: 35, mr: 2, color: "secondary.main" }}>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    style={{ fontSize: "10px" }}
                                />
                            </ListItemIcon>

                            <ListItemText primary={item} sx={{ textAlign: 'justify' }} />
                        </ListItem>
                    ))}

                </List>
            );

        case "table":

            return (
                <TableContainer
                    sx={{ overflowX: "auto", mb: 5 }}
                    data-aos="fade-up"
                >
                    <Table
                        sx={{
                            width: "100%",
                            tableLayout: "auto",
                            "& .MuiTableCell-root": {
                                border: "1px solid #E74C3C",
                            },
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                {(block.headers || []).map((header, i) => (
                                    <TableCell
                                        key={i}
                                        sx={{
                                            fontWeight: 600,
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {header}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {(block.rows || []).map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <TableCell
                                            key={cellIndex}
                                            sx={{ whiteSpace: "nowrap" }}
                                        >
                                            {cell}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            );

        // ==========================================
        // ABOUT US BLOCKS
        // ==========================================

        case "page_hero":

            return (
                <PageHero
                    title={block.title}
                    description={block.description}
                    image={block.image}
                    breadcrumb={block.breadcrumb}
                />
                // <Box
                //     data-aos="fade-up"
                //     sx={{
                //         position: "relative",
                //         minHeight: { xs: 260, md: 360 },
                //         display: "flex",
                //         alignItems: "center",
                //         overflow: "hidden",
                //         backgroundImage: block.image
                //             ? `linear-gradient(90deg, rgba(5,25,48,.94), rgba(5,25,48,.45)), url("${block.image}")`
                //             : "linear-gradient(120deg, #052039, #0B2D53)",
                //         backgroundSize: "cover",
                //         backgroundPosition: "center",
                //         px: { xs: 3, md: 8 },
                //         py: 8,
                //         mb: 5,
                //     }}
                // >
                //     <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>

                //         {block.breadcrumb && (
                //             <Typography
                //                 sx={{
                //                     color: "rgba(255,255,255,.75)",
                //                     mb: 2,
                //                     fontSize: 14,
                //                 }}
                //             >
                //                 {block.breadcrumb}
                //             </Typography>
                //         )}

                //         <Typography
                //             variant="h1"
                //             sx={{
                //                 color: "#fff",
                //                 fontFamily: "Playfair Display",
                //                 fontWeight: 700,
                //                 fontSize: {
                //                     xs: "2.3rem",
                //                     md: "3.8rem",
                //                 },
                //                 mb: 2,
                //             }}
                //         >
                //             {block.title}
                //         </Typography>

                //         <Box
                //             sx={{
                //                 width: 65,
                //                 height: 4,
                //                 bgcolor: "#E5BD55",
                //                 mb: 2,
                //             }}
                //         />

                //         <Typography
                //             sx={{
                //                 color: "rgba(255,255,255,.9)",
                //                 maxWidth: 650,
                //                 lineHeight: 1.8,
                //             }}
                //         >
                //             {block.description}
                //         </Typography>

                //     </Box>
                // </Box>
            );

        case "image_text":

            return (
                <Box sx={{ mb: 8 }} data-aos="fade-up">

                    <Grid container spacing={5} sx={{ alignItems: "center" }}>

                        <Grid size={{ xs: 12, md: 5 }}>
                            {renderImage(block.image, block.alt, {
                                height: { xs: 250, md: 340 },
                                borderRadius: 3,
                                boxShadow: "0 12px 30px rgba(0,0,0,.1)",
                            })}
                        </Grid>

                        <Grid size={{ xs: 12, md: 7 }}>

                            {block.label && (
                                <Typography
                                    variant="overline"
                                    sx={{
                                        color: "#880D2E",
                                        fontWeight: 700,
                                        letterSpacing: 2,
                                    }}
                                >
                                    {block.label}
                                </Typography>
                            )}

                            <Typography
                                variant="h3"
                                sx={{
                                    color: "#0B2D53",
                                    fontFamily: "Playfair Display",
                                    fontWeight: 700,
                                    mb: 2,
                                }}
                            >
                                {block.title}
                            </Typography>

                            <Typography
                                sx={{
                                    lineHeight: 1.9,
                                    textAlign: "justify",
                                    whiteSpace: "pre-line",
                                }}
                            >
                                {block.description}
                            </Typography>

                        </Grid>

                    </Grid>
                </Box>
            );

        case "vision_mission":

            return (
                <Box
                    data-aos="fade-up"
                    sx={{
                        bgcolor: "#0B2D53",
                        p: { xs: 3, md: 5 },
                        borderRadius: 3,
                        mb: 8,
                    }}
                >
                    <Grid container spacing={3} sx={{ alignItems: "stretch" }}>

                        <Grid size={{ xs: 12, md: 3 }}>
                            <Stack
                                sx={{
                                    justifyContent: "center",
                                    height: "100%"
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: "#fff",
                                        fontFamily: "Playfair Display",
                                        fontWeight: 700,
                                    }}
                                >
                                    {block.title || "Our Vision & Mission"}
                                </Typography>

                                <Box
                                    sx={{
                                        width: 60,
                                        height: 4,
                                        bgcolor: "#E5BD55",
                                        mt: 2,
                                    }}
                                />
                            </Stack>
                        </Grid>

                        {[
                            {
                                title: "Our Vision",
                                content: block.vision,
                                icon: <VisibilityOutlined />,
                            },
                            {
                                title: "Our Mission",
                                content: block.mission,
                                icon: <TrackChangesOutlined />,
                            },
                        ].map((item, index) => (
                            <Grid
                                size={{ xs: 12, md: 4.5 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        height: "100%",
                                        borderRadius: 3,
                                        bgcolor: "#FAF9F6",
                                        boxShadow: "none",
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>

                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            sx={{
                                                alignItems: "center",
                                                mb: 2
                                            }}
                                        >
                                            <Avatar
                                                sx={{
                                                    bgcolor: "#F5EAD0",
                                                    color: "#880D2E",
                                                }}
                                            >
                                                {item.icon}
                                            </Avatar>

                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    color: "#880D2E",
                                                    fontWeight: 700,
                                                    fontFamily: "Playfair Display",
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </Stack>

                                        <Typography
                                            sx={{ lineHeight: 1.8 }}
                                        >
                                            {item.content}
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                </Box >
            );

        case "founder_profile":

            return (
                <Box sx={{ mb: 8 }} data-aos="fade-up">

                    <Grid container spacing={5} sx={{ alignItems: "center" }}>

                        <Grid size={{ xs: 12, md: 3 }}>
                            {renderImage(block.image, block.name, {
                                maxHeight: 320,
                                borderRadius: 3,
                                border: "3px solid #D4AF37",
                                boxShadow: "0 8px 24px rgba(0,0,0,.1)",
                            })}
                        </Grid>

                        <Grid size={{ xs: 12, md: 9 }}>

                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#880D2E",
                                    fontWeight: 700,
                                    letterSpacing: 2,
                                }}
                            >
                                {block.label || "FOUNDER'S LEGACY"}
                            </Typography>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: "Playfair Display",
                                    color: "#0B2D53",
                                    fontWeight: 700,
                                    mb: 1,
                                }}
                            >
                                {block.name}
                            </Typography>

                            {block.designation && (
                                <Typography
                                    color="text.secondary"
                                    sx={{ mb: 2 }}
                                >
                                    {block.designation}
                                </Typography>
                            )}

                            <Typography
                                sx={{
                                    lineHeight: 1.9,
                                    textAlign: "justify",
                                    whiteSpace: "pre-line",
                                }}
                            >
                                {block.description}
                            </Typography>

                            {block.quote && (
                                <Box
                                    sx={{
                                        mt: 3,
                                        p: 3,
                                        bgcolor: "#FAF9F6",
                                        borderLeft: "4px solid #D4AF37",
                                        borderRadius: 1,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: "Playfair Display",
                                            fontStyle: "italic",
                                            color: "#0B2D53",
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        "{block.quote}"
                                    </Typography>
                                </Box>
                            )}

                        </Grid>

                    </Grid>
                </Box>
            );

        case "management_cards":

            return (
                <Box sx={{ mb: 8 }} data-aos="fade-up">

                    {block.title && (
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "Playfair Display",
                                color: "#0B2D53",
                                fontWeight: 700,
                                mb: 1,
                            }}
                        >
                            {block.title}
                        </Typography>
                    )}

                    {block.description && (
                        <Typography
                            color="text.secondary"
                            sx={{ mb: 4 }}
                        >
                            {block.description}
                        </Typography>
                    )}

                    <Grid container spacing={3}>

                        {(block.items || []).map((item, index) => (
                            <Grid
                                size={{ xs: 12, sm: 6, md: 4 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        height: "100%",
                                        borderRadius: 3,
                                        border: "1px solid #E8E5E0",
                                        boxShadow: "0 5px 20px rgba(0,0,0,.04)",
                                        transition: "all .3s ease",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                            boxShadow: "0 12px 28px rgba(0,0,0,.09)",
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>

                                        <Avatar
                                            src={item.image || undefined}
                                            alt={item.name}
                                            sx={{
                                                width: 65,
                                                height: 65,
                                                mb: 2,
                                                bgcolor: "#F5EAD0",
                                                color: "#880D2E",
                                            }}
                                        >
                                            <GroupsOutlined />
                                        </Avatar>

                                        <Typography
                                            variant="h6"
                                            fontWeight={700}
                                            color="#880D2E"
                                        >
                                            {item.name}
                                        </Typography>

                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                        >
                                            {item.designation}
                                        </Typography>

                                        {item.description && (
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    mt: 2,
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                {item.description}
                                            </Typography>
                                        )}

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                </Box>
            );

        case "objectives":

            return (
                <Box
                    data-aos="fade-up"
                    sx={{
                        bgcolor: "#F1F4F8",
                        p: { xs: 3, md: 5 },
                        borderRadius: 3,
                        mb: 8,
                    }}
                >
                    <Grid container spacing={4} sx={{ alignItems: "center" }}>

                        <Grid size={{ xs: 12, md: block.image ? 7 : 12 }}>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: "Playfair Display",
                                    color: "#0B2D53",
                                    fontWeight: 700,
                                    mb: 3,
                                }}
                            >
                                {block.title || "Our Objectives"}
                            </Typography>

                            <List disablePadding>

                                {(block.items || []).map((item, index) => (
                                    <ListItem
                                        key={index}
                                        disableGutters
                                        sx={{ alignItems: "flex-start" }}
                                    >
                                        <ListItemIcon
                                            sx={{ minWidth: 36, mt: 0.5 }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faCircleCheck}
                                                style={{ color: "#880D2E" }}
                                            />
                                        </ListItemIcon>

                                        <ListItemText
                                            primary={item}
                                            primaryTypographyProps={{
                                                lineHeight: 1.7,
                                            }}
                                        />
                                    </ListItem>
                                ))}

                            </List>

                        </Grid>

                        {block.image && (
                            <Grid size={{ xs: 12, md: 5 }}>
                                {renderImage(block.image, block.alt, {
                                    height: 280,
                                    borderRadius: 3,
                                })}
                            </Grid>
                        )}

                    </Grid>
                </Box>
            );

        case "timeline":

            return (
                <Box sx={{ mb: 8 }} data-aos="fade-up">

                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: "Playfair Display",
                            color: "#0B2D53",
                            fontWeight: 700,
                            mb: 4,
                        }}
                    >
                        {block.title || "Institutional Milestones"}
                    </Typography>

                    <Grid container spacing={3}>

                        {(block.items || []).map((item, index) => (
                            <Grid
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={index}
                            >
                                <Box
                                    sx={{
                                        borderTop: "3px solid #D4AF37",
                                        pt: 2,
                                        height: "100%",
                                    }}
                                >

                                    <Chip
                                        label={item.year}
                                        sx={{
                                            bgcolor: "#880D2E",
                                            color: "#fff",
                                            fontWeight: 700,
                                            mb: 2,
                                        }}
                                    />

                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        color="#0B2D53"
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            mt: 1,
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {item.description}
                                    </Typography>

                                </Box>
                            </Grid>
                        ))}

                    </Grid>
                </Box>
            );


        case "persons_list":

            return (
                <Box sx={{ mb: 8 }} data-aos="fade-up">

                    {block.title && (
                        <Box sx={{ mb: 3 }}>
                            <Typography
                                variant="h4"
                            >
                                {block.title}
                            </Typography>
                            <Divider sx={{ mt: 1 }} />
                        </Box>
                    )}

                    {block.description && (
                        <Typography
                            color="text.secondary"
                            sx={{
                                textAlign: "justify",
                                mb: 5,
                                lineHeight: 1.9,
                                whiteSpace: "pre-line",
                            }}
                        >
                            {block.description}
                        </Typography>
                    )}

                    <Grid container spacing={3} sx={{ justifyContent: 'center' }}>

                        {(block.items || []).map((item, index) => (
                            <Grid
                                size={{ xs: 12, sm: 6, md: 4 }}
                                key={index}
                            >
                                <Card
                                    sx={{
                                        boxShadow: 0,
                                        textAlign: "center",
                                        borderRadius: 4,
                                        transition: "0.3s",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                        },
                                    }}
                                >
                                    <CardContent>

                                        <Avatar
                                            src={item.image || undefined}
                                            alt={item.name}
                                            sx={{
                                                width: 150,
                                                height: 150,
                                                mx: "auto",
                                                mb: 2,
                                            }}
                                        />

                                        <Typography fontWeight={600}>
                                            {item.name}
                                        </Typography>

                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                        >
                                            {item.designation}
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                        }

                    </Grid >
                </Box >
            );

        default:
            return null;
    }
}
