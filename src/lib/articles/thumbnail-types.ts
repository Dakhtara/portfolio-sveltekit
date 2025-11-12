// Type definitions for thumbnail registry
// This file can be committed as it only contains type definitions

import type { Picture } from 'vite-imagetools';

/**
 * Type for thumbnail entries - can be either a Picture object (enhanced) or a string URL (plain)
 */
export type ThumbnailEntry = Picture | string;

/**
 * Interface for the generated thumbnail registry
 */
export interface IThumbnailRegistry {
	getThumbnail(thumbnailPath: string): ThumbnailEntry | undefined;
	getAvailableThumbnails(): string[];
	hasThumbnail(thumbnailPath: string): boolean;
}