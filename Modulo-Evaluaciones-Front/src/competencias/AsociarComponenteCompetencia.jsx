import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Grid,
  Paper,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const componentes = [
  { nombre: "Trabajo Grupal", porcentaje: 40 },
  { nombre: "Examen Parcial", porcentaje: 30 },
  { nombre: "Examen Final", porcentaje: 30 },
];

export const AsociarComponenteCompetencia = () => {
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          borderRadius: 5,
          textAlign: "center",
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ letterSpacing: 2 }}>
          ASOCIAR COMPONENTE A COMPETENCIA
        </Typography>
      </Paper>
      <Grid container spacing={4} justifyContent="center">
        {componentes.map((comp) => (
          <Grid item key={comp.nombre}>
            <Card
              sx={{
                minWidth: 250,
                minHeight: 140,
                boxShadow: 3,
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardContent sx={{ width: "100%", textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {comp.nombre}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                >
                  <IconButton color="primary">
                    <AddCircleOutlineIcon />
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{
                      bgcolor: "#f5f5f5",
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      fontWeight: 500,
                    }}
                  >
                    {comp.porcentaje} %
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={8} textAlign="center">
        <IconButton color="primary" sx={{ fontSize: 60 }}>
          <AddCircleOutlineIcon sx={{ fontSize: 60 }} />
        </IconButton>
        <Typography variant="subtitle1">Agregar nuevo componente</Typography>
      </Box>
    </Box>
  );
};
