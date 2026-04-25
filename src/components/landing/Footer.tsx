import { Anchor, Container, Group, Stack, Text, Title } from "@mantine/core";
import { WHATSAPP_LINK } from "@/lib/constants";
import classes from "@/components/landing/landing.module.css";

export function Footer() {
  return (
    <footer className={classes.footerRoot}>
      <Container size="lg">
        <Group justify="space-between" align="flex-start" gap="lg">
          <Stack gap={6}>
            <Title order={3} c="gray.0">
              Geofront
            </Title>
            <Text c="gray.4" maw={420}>
              Soluções em manutenção, suporte técnico e venda de equipamentos para pessoas
              e empresas.
            </Text>
          </Stack>

          <Stack gap={6}>
            <Anchor href={WHATSAPP_LINK} target="_blank" rel="noreferrer" c="gray.0" fw={700}>
              Falar no WhatsApp
            </Anchor>
            <Text c="gray.5">© 2026 Geofront. Todos os direitos reservados.</Text>
          </Stack>
        </Group>
      </Container>
    </footer>
  );
}

