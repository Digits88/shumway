/**
 * Copyright 2014 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: CubeTexture
module Shumway.AVMX.AS.flash.display3D.textures {
  import notImplemented = Shumway.Debug.notImplemented;
  import axCoerceString = Shumway.AVMX.axCoerceString;
  export class CubeTexture extends flash.display3D.textures.TextureBase {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // List of static symbols to link.
    static classSymbols: string [] = null; // [];
    
    // List of instance symbols to link.
    static instanceSymbols: string [] = null; // [];
    
    constructor () {
      super();
    }

    uploadFromBitmapData(source: flash.display.BitmapData, side: number /*uint*/, miplevel: number /*uint*/ = 0): void {
      source = source; side = side >>> 0; miplevel = miplevel >>> 0;
      notImplemented("public flash.display3D.textures.CubeTexture::uploadFromBitmapData"); return;
    }
    uploadFromByteArray(data: flash.utils.ByteArray, byteArrayOffset: number /*uint*/, side: number /*uint*/, miplevel: number /*uint*/ = 0): void {
      data = data; byteArrayOffset = byteArrayOffset >>> 0; side = side >>> 0; miplevel = miplevel >>> 0;
      notImplemented("public flash.display3D.textures.CubeTexture::uploadFromByteArray"); return;
    }
    uploadCompressedTextureFromByteArray(data: flash.utils.ByteArray, byteArrayOffset: number /*uint*/, async: boolean = false): void {
      data = data; byteArrayOffset = byteArrayOffset >>> 0; async = !!async;
      notImplemented("public flash.display3D.textures.CubeTexture::uploadCompressedTextureFromByteArray"); return;
    }
  }
}
