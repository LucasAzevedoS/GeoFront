import { Box, Button, Container, Group, Stack, Text, Title } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import classes from "@/components/landing/landing.module.css";

export function CTA() {
  return (
    <Box id="contato" className={classes.section}>
      <Container size="lg">
        <Box className={classes.ctaSurface} p={{ base: "xl", md: "2.4rem" }} style={{ borderRadius: 24 }}>
          <Group justify="space-between" align="center" gap="xl">
            <Stack gap="xs" maw={620}>
              <Title order={2}>Precisa de suporte técnico ou quer melhorar seu computador?</Title>
              <Text c="gray.4">
                Fale com a Geofront agora e receba um atendimento rápido, confiável e
                personalizado.
              </Text>
            </Stack>

            <Button
              component="a"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              size="lg"
              radius="xl"
              color="gray.0"
              c="brand.9"
              leftSection={<IconBrandWhatsapp size={20} />}
            >
              Chamar no WhatsApp
            </Button>
          </Group>
        </Box>
      </Container>
    </Box>
  );
}

