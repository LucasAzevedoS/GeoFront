"use client";

import {
  Anchor,
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Stack,
  Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import classes from "@/components/landing/landing.module.css";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" }
];

export function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box className={classes.headerRoot}>
      <Container size="lg" py="md">
        <Group justify="space-between">
          <Anchor href="#inicio" c="brand.9" fw={800} size="xl">
            <Text span className={classes.brandTitle}>
              GEOFRONT
            </Text>
          </Anchor>

          <Group gap="lg" visibleFrom="sm">
            {navItems.map((item) => (
              <Anchor
                key={item.href}
                href={item.href}
                className={classes.navLink}
                size="sm"
              >
                {item.label}
              </Anchor>
            ))}
          </Group>

          <Group gap="sm">
            <Button
              component="a"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              leftSection={<IconBrandWhatsapp size={18} />}
              radius="xl"
              visibleFrom="sm"
              color="brand.9"
            >
              Falar no WhatsApp
            </Button>

            <Burger
              opened={opened}
              onClick={opened ? close : open}
              hiddenFrom="sm"
              aria-label="Abrir menu"
            />
          </Group>
        </Group>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        title="Menu Geofront"
        hiddenFrom="sm"
        position="right"
      >
        <Stack gap="lg">
          {navItems.map((item) => (
            <Anchor
              key={item.href}
              href={item.href}
              onClick={close}
              c="brand.8"
              fw={600}
            >
              {item.label}
            </Anchor>
          ))}

          <Button
            component="a"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            leftSection={<IconBrandWhatsapp size={18} />}
            radius="xl"
            color="brand.9"
          >
            Falar no WhatsApp
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}

