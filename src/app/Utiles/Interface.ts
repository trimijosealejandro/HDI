export interface Usuario{
  id:number,
  nombre:string,
  email:string,
  password:string,
  api_token:string
}

export interface Departamento{
  id:number,
  nombre:string
}

export interface Pc{
  id:number,
  nombre:string,
  InventarioMonitor:number,
  InventarioCPU:number,
  InventarioBackup:number,
  InventarioImpresora:number,
  InventarioModem:number,
  InventarioOtro:number,
  MotherboardFabricante:string,
  MotherboardModelo:string,
  MotherboardVersión:string,
  MotherboardSerie:number,
  MicroprocesadorFabricante:string,
  MicroprocesadorModelo:string,
  MicroprocesadorVersión:string,
  MicroprocesadorSerie:number,
  DiscoduroFabricante:string,
  DiscoduroModelo:string,
  DiscoduroVersión:string,
  DiscoduroSerie:number,
  MemoriaFabricante:string,
  MemoriaModelo:string,
  MemoriaVersión:string,
  MemoriaSerie:number,
  FuenteFabricante:string,
  FuenteModelo:string,
  FuenteVersión:string,
  FuenteSerie:number,
  CDDVDFabricante:string,
  CDDVDModelo:string,
  CDDVDVersión:string,
  CDDVDSerie:number,
  BocinasFabricante:string,
  BocinasModelo:string,
  BocinasVersión:string,
  BocinasSerie:number,
  MouseFabricante:string,
  MouseModelo:string,
  MouseVersión:string,
  MouseSerie:number,
  TecladoFabricante:string,
  TecladoModelo:string,
  TecladoVersión:string,
  TecladoSerie:number,
  ImpresoraFabricante:string,
  ImpresoraModelo:string,
  ImpresoraVersión:string,
  ImpresoraSerie:number,
  MonitorFabricante:string,
  MonitorModelo:string,
  MonitorVersión:string,
  MonitorSerie:number,
  BackupFabricante:string,
  BackupModelo:string,
  BackupVersión:string,
  BackupSerie:number,
  ModemFabricante:string,
  ModemModelo:string,
  ModemVersión:string,
  ModemSerie:number,
  OtroFabricante:string,
  OtroModelo:string,
  OtroVersión:string,
  OtroSerie:number,
  departamentos_id:number,
}

export interface Inspeccion{
  id:number,
  name:string,
  fecha:string,
  area:string,
  participantes:string,
  situacion_detectada:string,
  plan_medida:string,
  responsable:string,
  fecha_solucionar:string,
  pcs_id:number
}
export interface Soporte{
  id:number,
  name:string,
  area:pabellones,
  contenido:string,
  trabajo:string,
  nivel_de_acceso:string,
  dateTimefecha_entrada:string,
  dateTimefecha_salid:string,
  observaciones:string,
  pcs_id:number,
}

export interface Software{
  id:number,
  name:string,
  area:pabellones,
  software_instalados:string,
  instalado_por:string,
  fecha:string,
  observaciones:string,
  pcs_id:number,
}

export interface Mantenimiento{
  id:number,
  name:string
  area:pabellones,
  equipo:string,
  fecha:string,
  tecnico:string,
  labor_realizada:string,
  observaciones:string,
  pcs_id:number,
}

export interface Incidencia{
  id:number,
  name:string,
  fecha:string,
  hecho_detectado:string,
  forma_de_deteccion:string,
  medidas_tomadas:string,
  observacion:string,
  pcs_id:number,
}

export interface Seguridad{
  id:number,
  name:string,
  seguridad_local:string,
  cuidado_medios:string,
  sello_seguridad:string,
  expediente_tecnico:string,
  registro_acceso:string,
  acta_responsabilidad:string,
  inventario:string,
  password1:string,
  password2:string,
  password3:string,
  permiso_administrador:string,
  software_autorizado:string,
  software_no_autorizado:string,
  archivo_no_autorizado:string,
  evaluacion_inspeccion:string,
  observaciones:string,
  pcs_id:number,
}

export interface MovimientoPc{
  id:number,
  name:string,
  departamento:string,
  fecha:string,
  accesorio_movido:string,
  lugar_origen:string,
  lugar_destino:string,
  responsable_entrega:string,
  responsable_recibe:string,
  pcs_id:number,
}
 export enum pabellones{
   Marina_Grajales,
   Fructuoso_Rodriguez,
   Antonio_Maceo,
   Elpidio_Sosa,
   Docente,
 }
