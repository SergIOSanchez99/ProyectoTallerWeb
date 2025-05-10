import { Routes, Route, Navigate } from "react-router-dom";
import { CompetenciasLayout, AsociarComponenteCompetencia } from ".";

export const CompetenciasRoutes = () => {
  return (
    <CompetenciasLayout>
      <Routes>
        <Route path="asociar" element={<AsociarComponenteCompetencia />} />
        <Route path="*" element={<Navigate to="asociar" />} />
      </Routes>
    </CompetenciasLayout>
  );
};
