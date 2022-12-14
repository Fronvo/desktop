import { writable, type Writable } from 'svelte/store';

interface ThemingOptions {
    // Fronvo background color
    bg_color: string;

    // Header text color (accent)
    text_color: string;

    // SideNav background color (accent 2)
    accent_bg_color: string;

    // SideNav shadow color (accent 2.2)
    accent_shadow_color: string;

    // SVG strokes
    svg_stroke: string;

    // Modal background color
    modal_bg_color: string;

    // Modal content background color
    modal_content_bg_color: string;

    // Modal content shadow bg color
    modal_content_shadow_bg_color: string;

    // Modal input background color
    modal_input_bg_color: string;

    // Modal checkbox primary color
    modal_checkbox_primary_color: string;

    // Modal checkbox secondary color
    modal_checkbox_secondary_color: string;

    // Highlighted profile info color
    profile_info_color: string;
}

export const defaultTheme: ThemingOptions = {
    bg_color: 'rgb(30, 30, 30)',

    text_color: 'rgb(180, 120, 255)',

    accent_bg_color: 'rgba(22, 22, 22, 50%)',

    accent_shadow_color: 'rgb(10, 10, 10)',

    svg_stroke: 'rgb(130, 64, 255)',

    modal_bg_color: 'rgba(12, 12, 12, 75%)',

    modal_content_bg_color: 'rgb(20, 20, 20)',

    modal_content_shadow_bg_color: 'rgb(10, 10, 10)',

    modal_input_bg_color: 'rgba(35, 35, 35, 0.5)',

    modal_checkbox_primary_color: 'rgb(150, 100, 250)',

    modal_checkbox_secondary_color: 'rgb(150, 100, 220)',

    profile_info_color: 'white',
};

export const whiteTheme: ThemingOptions = {
    bg_color: 'rgb(250, 250, 250)',

    text_color: 'rgb(150, 100, 250)',

    accent_bg_color: 'rgb(255, 255, 255, 50%)',

    accent_shadow_color: 'rgb(230, 230, 230)',

    svg_stroke: 'rgb(130, 64, 255)',

    modal_bg_color: 'rgba(230, 230, 230, 75%)',

    modal_content_bg_color: 'rgb(250, 250, 250)',

    modal_content_shadow_bg_color: 'rgb(210, 210, 210)',

    modal_input_bg_color: 'rgb(240, 240, 240)',

    modal_checkbox_primary_color: 'rgb(150, 100, 250)',

    modal_checkbox_secondary_color: 'rgb(150, 100, 220)',

    profile_info_color: 'rgb(40, 40, 40)',
};

export const currentTheme: Writable<ThemingOptions> = writable(defaultTheme);
