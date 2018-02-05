using ProfilPol.Core.Dictionaries;
using ProfilPol.Core.Domain.GarageComponents;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProfilPol.Core.Domain
{
    class Garage: Entity
    {
        public bool IsCustom { get; protected set; }
        public GarageType Type { get; protected set; }
        public Window Windows { get; protected set; }
        public SheetColor SheetColor { get; protected set; }

        public SheetType SheetType { get; protected set; }


        public double XLength { get; protected set; }
        public double YLength { get; protected set; }
        public double ZLength { get; protected set; }

        public double RoofHeight { get; protected set; }
        public double RoofWidth { get; protected set; }

    }
}
