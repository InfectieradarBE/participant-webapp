import { AppConfig } from 'case-web-app-core/build/types/appConfig';

export const appConfig: AppConfig = {
  instanceId: 'belgium',
  languages: [
    { code: 'nl-be', itemKey: 'nl-be' },
    { code: 'en', itemKey: 'en' },
    { code: 'fr-be', itemKey: 'fr-be' },
    { code: 'de-be', itemKey: 'de-be' },
  ],
  avatars: [
    { avatarId: 'default', url: '/avatars/genderneutraal.svg' },
    { avatarId: 'architect', url: '/avatars/architect.svg' },
    { avatarId: 'baby', url: '/avatars/baby.svg' },
    { avatarId: 'man_torso', url: '/avatars/man_torso.svg' },
    { avatarId: 'zakenman', url: '/avatars/zakenman.svg' },
    { avatarId: 'vrouw_torso', url: '/avatars/vrouw_torso.svg' },
    { avatarId: 'vrouw_met_hoofdoek', url: '/avatars/vrouw_met_hoofddoek.svg' },
    { avatarId: 'zakenvrouw', url: '/avatars/zakenvrouw.svg' },
    { avatarId: 'baby_torso', url: '/avatars/baby_torso.svg' },
    { avatarId: 'oude_vrouw_torso', url: '/avatars/oude_vrouw_torso.svg' },
  ]
}
