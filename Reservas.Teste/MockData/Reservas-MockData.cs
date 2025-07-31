using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reservas.Api.Models;

namespace Reservas.Teste.MockData
{
    public class ReservasMockData
    {
        public static List<Reserva> GetReservas()
        {

            return new List<Reserva>()
            {
                new Reserva { ReservaId = 1, Nome = "Marcos", InicioLocacao = "São Paulo", FimLocacao = "Campinas" },

                new Reserva { ReservaId = 1, Nome = "Willian Bonner", InicioLocacao = "Campinas", FimLocacao = "Minas Gerais" },

                new Reserva { ReservaId = 1, Nome = "Luan Santana", InicioLocacao = "Chile", FimLocacao = "Paraguai" },
            };
        }
    }
}
