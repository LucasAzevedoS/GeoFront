import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title
} from "@mantine/core";
import {
  IconBolt,
  IconBrandWhatsapp,
  IconCpu,
  IconDeviceLaptop,
  IconShieldCheck
} from "@tabler/icons-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import classes from "@/components/landing/landing.module.css";

export function Hero() {
  return (
    <Box id="inicio" className={classes.section}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: "xl", md: 56 }}>
          <div>
            <Paper p={{ base: "xl", md: "2rem" }} radius="xl" className={classes.heroSurface}>
              <Stack gap="lg">
                <Badge
                  variant="light"
                  color="brand"
                  radius="xl"
                  w="fit-content"
                  tt="none"
                >
                  Tecnologia com atendimento personalizado
                </Badge>

                <Title order={1} size="clamp(2rem, 5vw, 3.25rem)" className={classes.heroTitle}>
                  Soluções em tecnologia para você e sua empresa
                </Title>

                <Text size="lg" c="brand.7">
                  Manutenção, suporte técnico e venda de equipamentos com atendimento
                  rápido e confiável.
                </Text>

                <Group mt="xs">
                  <Button
                    component="a"
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    size="md"
                    color="brand.9"
                    radius="xl"
                    leftSection={<IconBrandWhatsapp size={18} />}
                  >
                    Solicitar atendimento
                  </Button>

                  <Button component="a" href="#servicos" variant="outline" color="brand.9" radius="xl">
                    Ver serviços
                  </Button>
                </Group>
              </Stack>
            </Paper>
          </div>

          <div>
            <Paper p="xl" radius="xl" className={classes.featurePanel}>
              <Stack gap="lg">
                <Group gap="xs">
                  <ThemeIcon variant="white" color="dark" radius="xl" size={34}>
                    <IconCpu size={18} />
                  </ThemeIcon>
                  <Text fw={700}>Geofront Technology</Text>
                </Group>

                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon variant="light" color="gray" size={38} radius="xl">
                    <IconBolt size={19} />
                  </ThemeIcon>
                  <div>
                    <Text fw={700} mb={4}>
                      Atendimento ágil
                    </Text>
                    <Text size="sm" c="gray.3">
                      Priorizamos soluções rápidas para reduzir seu tempo parado.
                    </Text>
                  </div>
                </Group>

                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon variant="light" color="gray" size={38} radius="xl">
                    <IconShieldCheck size={19} />
                  </ThemeIcon>
                  <div>
                    <Text fw={700} mb={4}>
                      Confiabilidade total
                    </Text>
                    <Text size="sm" c="gray.3">
                      Diagnóstico transparente e execução com padrão profissional.
                    </Text>
                  </div>
                </Group>

                <Group align="flex-start" wrap="nowrap">
                  <ThemeIcon variant="light" color="gray" size={38} radius="xl">
                    <IconDeviceLaptop size={19} />
                  </ThemeIcon>
                  <div>
                    <Text fw={700} mb={4}>
                      Suporte completo
                    </Text>
                    <Text size="sm" c="gray.3">
                      Do reparo ao upgrade, cuidamos do ciclo inteiro do equipamento.
                    </Text>
                  </div>
                </Group>
              </Stack>
            </Paper>
          </div>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
