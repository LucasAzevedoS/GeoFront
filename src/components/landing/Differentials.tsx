import { Box, Container, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import {
  IconCurrencyDollar,
  IconEyeCheck,
  IconTruckDelivery,
  IconUserCog,
  IconUsersGroup
} from "@tabler/icons-react";
import classes from "@/components/landing/landing.module.css";

const differentials = [
  { icon: <IconTruckDelivery size={22} />, text: "Atendimento rápido" },
  { icon: <IconCurrencyDollar size={22} />, text: "Preço justo" },
  { icon: <IconEyeCheck size={22} />, text: "Transparência" },
  { icon: <IconUsersGroup size={22} />, text: "Atendimento para empresas e pessoas físicas" },
  { icon: <IconUserCog size={22} />, text: "Suporte remoto e presencial" }
];

export function Differentials() {
  return (
    <Box id="diferenciais" className={classes.section}>
      <Container size="lg">
        <Stack gap="xs" mb="xl">
          <Title order={2}>Por que escolher a Geofront?</Title>
          <Text c="brand.7" size="lg">
            Nosso foco é entregar resultado com agilidade, clareza e parceria de longo prazo.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {differentials.map((item) => (
            <Paper key={item.text} p="lg" radius="xl" className={classes.differentialCard}>
              <Stack>
                <ThemeIcon size={44} radius="xl" color="brand.9">
                  {item.icon}
                </ThemeIcon>
                <Text fw={700}>{item.text}</Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
