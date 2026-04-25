import { Box, Container, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import type { ReactNode } from "react";
import {
  IconBrush,
  IconCloudNetwork,
  IconDatabaseCog,
  IconDeviceLaptop,
  IconSettingsUp,
  IconTool,
  IconWand
} from "@tabler/icons-react";
import classes from "@/components/landing/landing.module.css";

type Service = {
  icon: ReactNode;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: <IconWand size={22} />,
    title: "Formatação de computadores",
    description: "Sistema limpo, otimizado e pronto para uso."
  },
  {
    icon: <IconTool size={22} />,
    title: "Instalação de softwares",
    description: "Instalação segura com configuração correta para sua rotina."
  },
  {
    icon: <IconBrush size={22} />,
    title: "Manutenção preventiva",
    description: "Prevenimos falhas com revisão periódica e ajustes técnicos."
  },
  {
    icon: <IconSettingsUp size={22} />,
    title: "Upgrade (SSD / RAM)",
    description: "Mais velocidade e desempenho com upgrade estratégico."
  },
  {
    icon: <IconDatabaseCog size={22} />,
    title: "Limpeza interna",
    description: "Remoção de poeira e melhoria de refrigeração do equipamento."
  },
  {
    icon: <IconCloudNetwork size={22} />,
    title: "Suporte remoto",
    description: "Resolução rápida sem deslocamento para problemas de software."
  },
  {
    icon: <IconDeviceLaptop size={22} />,
    title: "Venda de notebooks e equipamentos",
    description: "Equipamentos, peças e acessórios com orientação técnica."
  }
];

export function Services() {
  return (
    <Box id="servicos" className={classes.section}>
      <Container size="lg">
        <Stack gap="xs" mb="xl">
          <Title order={2}>Serviços</Title>
          <Text c="brand.7" size="lg">
            Soluções completas para manter seu computador confiável, rápido e pronto para
            produzir.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {services.map((service) => (
            <Paper key={service.title} p="lg" radius="xl" className={classes.serviceCard}>
              <Stack>
                <ThemeIcon size={46} radius="xl" color="brand.9">
                  {service.icon}
                </ThemeIcon>
                <Title order={3} size="h4" c="var(--mantine-color-text)">
                  {service.title}
                </Title>
                <Text c="dimmed">{service.description}</Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
