import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CancionesController } from './canciones/canciones.controller';
import { ArtistasController } from './artistas/artistas.controller';
import { PlaylistsController } from './playlists/playlists.controller';

@Module({
  imports: [],
  controllers: [AppController, CancionesController, ArtistasController, PlaylistsController],
  providers: [AppService],
})
export class AppModule {}
