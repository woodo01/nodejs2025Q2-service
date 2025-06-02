import { ApiProperty } from '@nestjs/swagger';

export class TrackResponseDto {
  @ApiProperty({
    example: '0a35dd62-e09f-444b-a628-f4e7c6954f57',
    description: 'UUID of the track',
  })
  id: string;

  @ApiProperty({
    example: 'Love Forrever',
    description: 'Name of the track',
  })
  name: string;

  @ApiProperty({
    example: '0a35dd62-e09f-444b-a628-f4e7c6954f57',
    description: 'UUID of the artist',
  })
  artistId: string;

  @ApiProperty({
    example: '0a35dd62-e09f-444b-a628-f4e7c6954f57',
    description: 'UUID of the album',
  })
  albumId: string;
  @ApiProperty({
    example: 1000,
    description: 'Duration in seconds',
  })
  duration: number;
}
