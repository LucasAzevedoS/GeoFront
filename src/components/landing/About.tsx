import { Box, Container, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconHeartHandshake, IconHomeHeart, IconTargetArrow } from "@tabler/icons-react";
import classes from "@/components/landing/landing.module.css";

const values = [
  {
    icon: <IconHeartHandshake size={22} />,
    title: "Atendimento personalizado",
    description: "Cada cliente recebe diagnóstico claro, linguagem simples e solução sob medida."
  },
  {
    icon: <IconHomeHeart size={22} />,
    title: "Empresa familiar",
    description: "A Geofront é uma sociedade entre dois irmãos com atendimento próximo e humano."
  },
  {
    icon: <IconTargetArrow size={22} />,
    title: "Qualidade e confiança",
    description: "Trabalhamos para entregar durabilidade, performance e segurança em cada serviço."
  }
];

export function About() {
  return (
    <Box id="sobre" className={classes.section}>
      <Container size="lg">
        <Stack gap="xs" mb="xl">
          <Title order={2}>Sobre a Geofront</Title>
          <Text size="lg" c="brand.7" maw={760}>
            A Geofront nasceu da experiência prática em manutenção e tecnologia, unindo
            conhecimento técnico e compromisso com um suporte que realmente resolve.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {values.map((value) => (
            <Paper key={value.title} p="lg" radius="xl" className={classes.aboutCard}>
              <Stack>
                <ThemeIcon size={44} radius="xl" color="brand.9">
                  {value.icon}
                </ThemeIcon>
                <Title order={3} size="h4" c="var(--mantine-color-text)">
                  {value.title}
                </Title>
                <Text c="dimmed">{value.description}</Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
